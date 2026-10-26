// An image can be a string path or an object { path, filename }.
export const imgSrc = img => (typeof img === "string" ? img : (img && img.path) || "");
