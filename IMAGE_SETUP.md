# Adding Your Profile Image

## How to Add Your Photo

1. **Place your image file** in the `public` folder of your project
   - Recommended format: JPG, PNG, or WebP
   - Recommended size: At least 400x400 pixels (square image works best)
   - Recommended filename: `profile.jpg`, `profile.png`, or `avatar.jpg`

2. **Update the image path** in `components/Hero.tsx`
   - Find this line: `src="/your-profile-image.jpg"`
   - Replace it with your actual image path, for example:
     - `src="/profile.jpg"`
     - `src="/avatar.png"`
     - `src="/my-photo.webp"`

## Example:

If you have a file called `profile.jpg` in your `public` folder:

```tsx
<img
  src="/profile.jpg"  // ← Update this line
  alt="Sudarshan Acharya"
  className="w-full h-full object-cover"
  // ... rest of the code
/>
```

## Features:

- **Responsive**: Image scales perfectly on all devices
- **Circular Design**: Beautiful rounded profile picture
- **Hover Effects**: Subtle zoom animation on hover
- **Fallback**: If no image is provided, shows a gradient with your initials
- **Border**: Elegant border that matches your theme
- **Shadow**: Professional shadow effect

## Tips:

- Use a high-quality, professional photo
- Square images work best (1:1 aspect ratio)
- Good lighting and clear background recommended
- File size under 1MB for fast loading 