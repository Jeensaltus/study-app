#!/usr/bin/env python3
"""Prepare website logo from a pre-cut asset (black background → transparent)."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:/Users/jeens/.cursor/projects/c-Users-jeens-Desktop-Freshman/assets"
    r"/c__Users_jeens_AppData_Roaming_Cursor_User_workspaceStorage_989ac2bb11fea56eac47cc5ac3cf1708_images_image-88c86ca5-7a9b-4563-9ab1-90aa38e181d7.png"
)
OUT_DIR = Path(__file__).resolve().parent.parent / "public"
PADDING_PX = 2
BG_MAX_CHANNEL = 15
BG_BLUE_SLACK = 4


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a == 0:
        return True
    peak = max(r, g, b)
    if peak > BG_MAX_CHANNEL:
        return False
    return b <= max(r, g) + BG_BLUE_SLACK


def remove_black_background(im: Image.Image) -> Image.Image:
    rgba = im.convert("RGBA")
    width, height = rgba.size
    pixels = rgba.load()
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, a = pixels[x, y]
        if not is_background(r, g, b, a):
            continue
        pixels[x, y] = (0, 0, 0, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return rgba


def crop_to_content(im: Image.Image, padding: int = PADDING_PX) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(im.width, right + padding)
    bottom = min(im.height, bottom + padding)
    return im.crop((left, top, right, bottom))


def make_favicon(im: Image.Image, size: int = 512, fill_ratio: float = 0.92) -> Image.Image:
    """Scale logo up within a square canvas, centered, without cropping."""
    width, height = im.size
    max_dim = int(size * fill_ratio)
    scale = min(max_dim / width, max_dim / height)
    new_size = (max(1, int(width * scale)), max(1, int(height * scale)))
    resized = im.resize(new_size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    offset = ((size - new_size[0]) // 2, (size - new_size[1]) // 2)
    canvas.paste(resized, offset, resized)
    return canvas


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    processed = crop_to_content(remove_black_background(Image.open(SRC)))

    logo_path = OUT_DIR / "logo.png"
    favicon_path = OUT_DIR / "favicon.png"
    processed.save(logo_path, optimize=True)

    favicon = make_favicon(processed, size=512, fill_ratio=0.92)
    favicon.save(favicon_path, optimize=True)

    print(f"Saved {logo_path} ({processed.size[0]}x{processed.size[1]})")
    print(f"Saved {favicon_path} ({favicon.size[0]}x{favicon.size[1]})")


if __name__ == "__main__":
    main()
