import asyncio
import json
import base64
import os
import subprocess
import time
import urllib.request
import websockets

SCREENSHOTS_DIR = r"C:\Users\muthu\.gemini\antigravity\scratch\vasantham-cafe\screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

class BrowserSession:
    def __init__(self):
        self.proc = None
        self.ws = None
        self.msg_id = 0

    async def start(self):
        self.proc = subprocess.Popen([
            EDGE_PATH,
            "--headless=new",
            "--remote-debugging-port=9223",
            "--hide-scrollbars",
            "--no-first-run",
            "--no-default-browser-check",
            "about:blank"
        ])
        time.sleep(2)

        # Find target page
        resp = urllib.request.urlopen("http://127.0.0.1:9223/json").read().decode()
        pages = json.loads(resp)
        target = next(p for p in pages if p.get("type") == "page")
        ws_url = target["webSocketDebuggerUrl"]

        self.ws = await websockets.connect(ws_url, max_size=20*1024*1024)
        await self.send("Page.enable")
        await self.send("Runtime.enable")
        await self.send("Console.enable")

    async def send(self, method, params=None):
        self.msg_id += 1
        msg = {"id": self.msg_id, "method": method, "params": params or {}}
        await self.ws.send(json.dumps(msg))
        while True:
            resp_str = await self.ws.recv()
            resp = json.loads(resp_str)
            if resp.get("id") == self.msg_id:
                return resp.get("result", {})

    async def evaluate(self, expr):
        res = await self.send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
        return res.get("result", {}).get("value")

    async def set_viewport(self, width, height, mobile=False, scale=1):
        await self.send("Emulation.setDeviceMetricsOverride", {
            "width": width,
            "height": height,
            "deviceScaleFactor": scale,
            "mobile": mobile
        })

    async def screenshot(self, filename, clip=None):
        params = {"format": "png"}
        if clip:
            params["clip"] = clip
        res = await self.send("Page.captureScreenshot", params)
        data = base64.b64decode(res["data"])
        out_path = os.path.join(SCREENSHOTS_DIR, filename)
        with open(out_path, "wb") as f:
            f.write(data)
        print(f"Captured: {filename} ({len(data)} bytes)")

    async def close(self):
        if self.ws:
            await self.ws.close()
        if self.proc:
            self.proc.terminate()

async def main():
    browser = BrowserSession()
    await browser.start()

    try:
        print("Navigating to http://127.0.0.1:5173/ ...")
        await browser.set_viewport(1440, 900)
        await browser.send("Page.navigate", {"url": "http://127.0.0.1:5173/"})
        await asyncio.sleep(2.5)

        # 1. Desktop Hero
        await browser.screenshot("1_desktop_hero.png")

        # 2. Scroll to Story section
        await browser.evaluate("document.querySelector('#story').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("2_desktop_story.png")

        # 3. Scroll to Experience section
        await browser.evaluate("document.querySelector('#experience').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("3_desktop_experience.png")

        # 4. Scroll to Menu section
        await browser.evaluate("document.querySelector('#menu').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("4_desktop_menu.png")

        # 5. Scroll to Gallery section
        await browser.evaluate("document.querySelector('#gallery').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("5_desktop_gallery.png")

        # 6. Click a gallery card to open Lightbox Modal
        await browser.evaluate("document.querySelectorAll('.gallery-item-card')[0].click()")
        await asyncio.sleep(1)
        await browser.screenshot("6_lightbox_modal.png")

        # Close Lightbox with Escape
        await browser.evaluate("document.querySelector('.lightbox-close-btn').click()")
        await asyncio.sleep(0.5)

        # 7. Scroll to Visit & Footer
        await browser.evaluate("document.querySelector('#visit').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("7_desktop_visit.png")

        await browser.evaluate("document.querySelector('footer').scrollIntoView({behavior: 'instant'})")
        await asyncio.sleep(1)
        await browser.screenshot("8_desktop_footer.png")

        # 8. Mobile Viewport (390 x 844)
        print("Testing mobile viewport 390x844...")
        await browser.set_viewport(390, 844, mobile=True)
        await browser.send("Page.navigate", {"url": "http://127.0.0.1:5173/"})
        await asyncio.sleep(2)
        await browser.screenshot("9_mobile_hero_updated.png")

        # 9. Open Mobile Navigation Drawer
        await browser.evaluate("document.querySelector('.mobile-toggle').click()")
        await asyncio.sleep(1)
        await browser.screenshot("10_mobile_drawer_open.png")

        # Close Mobile Drawer
        await browser.evaluate("document.querySelector('.drawer-close-btn').click()")
        await asyncio.sleep(0.5)

        # 10. Check Console Errors
        logs = await browser.evaluate("window.__errors__ || []")
        print("Console errors check:", logs)
        print("All automated browser tests and captures completed successfully!")

    finally:
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
