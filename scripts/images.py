"""Crop and export the club's photos as responsive WebP files (run once; outputs are committed).
Usage: python3 scripts/images.py <source-dir>"""
import sys, os
from PIL import Image, ImageOps

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "img")
os.makedirs(OUT, exist_ok=True)

# name: (source file, crop box in source px or None, output widths)
JOBS = {
    "locsolas": ("bp16_IMG_7138.jpg", (330, 0, 1789, 1272), [720, 1200]),
    "bajnokcsapat": ("bp16_bajnokcsapat.jpg", None, [800, 1600]),
    "salakon": ("2019_06_pályán-2016aug.jpg", None, [760, 1328]),
    "csapat-hatulrol": ("2019_06_BeFunky-collage.jpg", (1656, 44, 2407, 792), [720]),
    "ebed": ("2019_06_BeFunky-collage.jpg", (44, 1020, 797, 1768), [720]),
    "ebed-2": ("2019_06_BeFunky-collage.jpg", (852, 1020, 1604, 1768), [720]),
    "szeniorok": ("2019_06_BeFunky-collage.jpg", (2464, 44, 3217, 792), [720]),
    "csapat-2018": ("2019_06_BeFunky-collage.jpg", (44, 44, 1604, 968), [800, 1500]),
    "csapat-napfeny": ("2019_06_BeFunky-collage.jpg", (1656, 845, 3217, 1768), [800, 1500]),
    "junior": ("2019_06_50231611_843612472636721_1532111084700303360_n.jpg", None, [960]),
    "serleg": ("2019_05_HB2017gyoztesek.jpg", None, [760, 1364]),
    "hazibajnokok": ("2017_06_IMG_20160821_133919.jpg", (300, 0, 3000, 1836), [800, 1500]),
}

for name, (src, box, widths) in JOBS.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, src))).convert("RGB")
    if box:
        im = im.crop(box)
    for w in widths:
        w = min(w, im.width)
        h = round(im.height * w / im.width)
        out = im.resize((w, h), Image.LANCZOS)
        path = os.path.join(OUT, f"{name}-{w}.webp")
        out.save(path, "WEBP", quality=80, method=6)
        print(f"{path}  {w}x{h}  {os.path.getsize(path)//1024} KB")
