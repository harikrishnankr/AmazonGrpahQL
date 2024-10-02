export function generateSKU(
  category: string,
  brand: string,
  productNumber: number,
  color: string,
): string {
  // Get the first 3 characters of the category and brand
  const categoryCode = category.substring(0, 3).toUpperCase();
  const brandCode = brand.substring(0, 3).toUpperCase();

  // Use a timestamp or product number for uniqueness
  const uniqueCode = productNumber.toString().padStart(6, '0'); // Pad to ensure it's 6 digits

  // Use the first character of the color
  const colorCode = color.substring(0, 2).toUpperCase();

  // Concatenate to create SKU
  const sku = `${categoryCode}-${brandCode}-${uniqueCode}-${colorCode}`;

  return sku;
}
