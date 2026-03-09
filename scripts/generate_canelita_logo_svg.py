from pathlib import Path
from typing import List, Optional, Tuple

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
INPUT_FILE = ROOT / "public" / "logos" / "canelita-games-current.png"
OUTPUT_FILE = ROOT / "public" / "logos" / "canelita-games-current.svg"

SIZE = 96
WHITE = (255, 255, 255)
DARK = (40, 3, 36)


def classify(pixel: Tuple[int, int, int, int]) -> Optional[Tuple[int, int, int]]:
	r, g, b, a = pixel
	if a < 32:
		return None
	return WHITE if (r + g + b) / 3 > 180 else DARK


def main() -> None:
	image = Image.open(INPUT_FILE).convert("RGBA").resize((SIZE, SIZE), Image.Resampling.LANCZOS)
	rows: List[List[Optional[Tuple[int, int, int]]]] = []

	for y in range(image.height):
		row: List[Optional[Tuple[int, int, int]]] = []
		for x in range(image.width):
			row.append(classify(image.getpixel((x, y))))
		rows.append(row)

	parts = [
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" role="img" aria-labelledby="title desc">',
		'<title id="title">Canelita Games logo</title>',
		'<desc id="desc">Recreacion en SVG del logo actual de Canelita Games a partir del asset publicado en la web.</desc>',
	]

	for color in (DARK, WHITE):
		fill = "#%02x%02x%02x" % color
		parts.append(f'<g fill="{fill}">')

		for y, row in enumerate(rows):
			x = 0
			while x < len(row):
				if row[x] != color:
					x += 1
					continue

				start = x
				while x < len(row) and row[x] == color:
					x += 1

				parts.append(f'<rect x="{start}" y="{y}" width="{x - start}" height="1"/>')

		parts.append("</g>")

	parts.append("</svg>")
	OUTPUT_FILE.write_text("\n".join(parts), encoding="utf-8")


if __name__ == "__main__":
	main()