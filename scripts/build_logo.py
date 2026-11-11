"""Builds the Canelita Games logo set (SVG) from geometric primitives.

Usage: python3 scripts/build_logo.py path/to/LilitaOne.woff2
The wordmark glyphs are converted to outlines so the SVGs need no font.
"""
import math, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

PLUM = "#2a0a26"
GRANADA = "#d6204b"
GRANADA_DARK = "#a3123a"
CANELA = "#b8642a"
CANELA_LIGHT = "#e09a5c"
CREAM = "#fff6ec"
MINT = "#2fd6ab"
B_TOP, B_LEFT, B_RIGHT, B_BOTTOM = "#ff5c86", "#ff8a1f", "#ffc43d", "#3a7bff"
S = 12  # one outline weight for the whole drawing

def stick(angle):
    # A rolled cinnamon quill: a capsule with a curled cross-section at each end.
    L, W = 262, 62
    body = (f'<rect x="{-W/2}" y="{-L}" width="{W}" height="{2*L}" rx="{W/2}" '
            f'fill="{CANELA}" stroke="{PLUM}" stroke-width="{S}"/>'
            f'<path d="M {-W/2+18} {-L+44} V {L-44}" stroke="{PLUM}" stroke-width="7" stroke-linecap="round" opacity=".55"/>')
    caps = ""
    for y in (-L + W/2, L - W/2):
        caps += (f'<circle cx="0" cy="{y}" r="{W/2}" fill="{CANELA_LIGHT}" stroke="{PLUM}" stroke-width="{S}"/>'
                 f'<path d="M 0 {y} m -4 -2 a 6 6 0 1 1 8 6 a 13 13 0 1 1 -16 -15 a 20 20 0 0 1 22 -6" '
                 f'fill="none" stroke="{PLUM}" stroke-width="7" stroke-linecap="round"/>')
    return f'<g transform="translate(256 286) rotate({angle})">{body}{caps}</g>'

CX, CY, R = 256, 286, 150

def fruit():
    crown = (f'<path d="M 208 158 L 194 96 L 230 124 L 256 82 L 282 124 L 318 96 L 304 158 Z" '
             f'fill="{GRANADA}" stroke="{PLUM}" stroke-width="{S}" stroke-linejoin="round"/>')
    body = f'<circle cx="{CX}" cy="{CY}" r="{R}" fill="{GRANADA}" stroke="{PLUM}" stroke-width="{S}"/>'
    shade = (f'<path d="M {CX+R-6} {CY+12} A {R-6} {R-6} 0 0 1 {CX-58} {CY+R-18} '
             f'A {R+40} {R+40} 0 0 0 {CX+R-6} {CY+12} Z" fill="{GRANADA_DARK}"/>')
    shine = (f'<path d="M 152 236 A 112 112 0 0 1 214 176" fill="none" stroke="#ffffff" '
             f'stroke-opacity=".7" stroke-width="14" stroke-linecap="round"/>')
    return crown + body + shade + shine

def face():
    out = ""
    for cx in (196, 316):
        out += f'<circle cx="{cx}" cy="{CY}" r="52" fill="{CREAM}" stroke="{PLUM}" stroke-width="10"/>'
    # D-pad: one plus shape, arms the same width as the button diameter.
    a, w = 32, 12
    d = (f"M {196-w} {CY-a} H {196+w} V {CY-w} H {196+a} V {CY+w} H {196+w} V {CY+a} "
         f"H {196-w} V {CY+w} H {196-a} V {CY-w} H {196-w} Z")
    out += f'<path d="{d}" fill="{MINT}" stroke="{PLUM}" stroke-width="8" stroke-linejoin="round"/>'
    for dx, dy, c in ((0, -24, B_TOP), (-24, 0, B_LEFT), (24, 0, B_RIGHT), (0, 24, B_BOTTOM)):
        out += f'<circle cx="{316+dx}" cy="{CY+dy}" r="14" fill="{c}" stroke="{PLUM}" stroke-width="6"/>'
    return out

def silhouette():
    # Sticker cut: the whole shape stroked wide in cream, under the art.
    g = (stick(45) + stick(-45) +
         f'<circle cx="{CX}" cy="{CY}" r="{R}"/>'
         f'<path d="M 208 158 L 194 96 L 230 124 L 256 82 L 282 124 L 318 96 L 304 158 Z" stroke-linejoin="round"/>')
    return (f'<g fill="{CREAM}" stroke="{CREAM}" stroke-width="40" stroke-linejoin="round">'
            + g.replace(f'fill="{CANELA}"', '').replace(f'fill="{CANELA_LIGHT}"', '')
                .replace(f'stroke="{PLUM}"', '').replace(f'fill="{GRANADA}"', '')
            + '</g>')

def mark_inner(sticker=True):
    return (silhouette() if sticker else "") + stick(45) + stick(-45) + fruit() + face()

def text_path(font, text, size, x, y, letter=0.0):
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); upm = font["head"].unitsPerEm
    sc = size / upm; out = []; cx = 0
    for ch in text:
        gname = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        tp = TransformPen(pen, (sc, 0, 0, -sc, x + cx, y))
        gs[gname].draw(tp)
        out.append(pen.getCommands())
        cx += font["hmtx"][gname][0] * sc + letter
    return " ".join(out), cx - letter

def write(path, vb, body, title):
    open(path, "w").write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img"><title>{title}</title>{body}</svg>\n')

if __name__ == "__main__":
    font = TTFont(sys.argv[1]); out = sys.argv[2] if len(sys.argv) > 2 else "public/logos"
    # Symbol only (header, footer, favicon, avatars)
    write(f"{out}/canelita-games-mark.svg", "0 0 512 512",
          f'<g transform="translate(0 -14)">{mark_inner()}</g>', "Canelita Games")
    # Stacked lockup
    l1, w1 = text_path(font, "CANELITA", 118, 0, 0, 4)
    l2, w2 = text_path(font, "GAMES", 118, 0, 0, 4)
    W = 760
    body = (f'<g transform="translate({(W-512)/2} -10)">{mark_inner()}</g>'
            f'<path d="{l1}" transform="translate({(W-w1)/2} 620)" fill="{PLUM}"/>'
            f'<path d="{l2}" transform="translate({(W-w2)/2} 740)" fill="{GRANADA}"/>')
    write(f"{out}/canelita-games-logo-stacked.svg", f"0 0 {W} 780", body, "Canelita Games")
    # Horizontal lockup
    body = (f'<g transform="translate(0 -14)">{mark_inner()}</g>'
            f'<path d="{l1}" transform="translate(486 262)" fill="{PLUM}"/>'
            f'<path d="{l2}" transform="translate(486 386)" fill="{GRANADA}"/>')
    write(f"{out}/canelita-games-logo-horizontal.svg", f"0 0 {int(500+max(w1,w2))} 512", body, "Canelita Games")
