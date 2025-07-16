'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

// Your actual photos from public folder
const samplePhotos: Photo[] = [
  {
    id: 1,
    src: '/1000003275.jpg',
    alt: 'Professional portrait',
    title: 'Professional Portrait',
    description: 'A professional headshot showcasing confidence and approachability.',
    category: 'Portrait',
    date: '2024-01-15'
  },
  {
    id: 2,
    src: '/IMG_6161.jpg',
    alt: 'Event',
    title: 'GUIC Conference',
    description: 'Presenting our project on prestigious Gandai University Conference.',
    category: 'Event',
    date: '2024-01-20'
  },
  {
    id: 3,
    src: '/IMG-20221116-WA0026.jpg',
    alt: 'Relax',
    title: 'A refreshing Dayout',
    description: 'Celebrating a nice dayout at Resort near Pokhara with some college mates.',
    category: 'Outdoor',
    date: '2024-01-25'
  },
  {
    id: 4,
    src: '/IMG_20200227_223246.jpg',
    alt: 'Event',
    title: 'Event Participation',
    description: 'Priceless moment being awarded with silver medal in inter province robo-soccer competition.',
    category: 'Event',
    date: '2024-01-30'
  },
  {
    id: 5,
    src: '/IMG_20200226_143202.jpg',
    alt: 'Event',
    title: 'Mr. Messi Himself',
    description: 'Mr. Messi being ready on robo soccer competition, eying on trophy.',
    category: 'Technology',
    date: '2024-02-05'
  },
  {
    id: 6,
    src: '/IMG_20200223_185807.jpg',
    alt: 'Code Magic',
    title: 'Code Magic',
    description: 'Rectify the patience and late night testing of hardwares and softwares.',
    category: 'Evening Work',
    date: '2024-02-10'
  },
  {
    id: 7,
    src: '/IMG-20241103-WA0013.jpg',
    alt: 'Tihar',
    title: 'Festival Celebration',
    description: 'The memory that ends with the life. Its priceless.',
    category: 'Festival',
    date: '2024-11-03'
  },
  {
    id: 8,
    src: '/IMG_20211204_135056.jpg',
    alt: 'Trek',
    title: 'Trek to Panchase Viewpoint',
    description: 'Mesmarizing treking with my friend to Panchase Vanjyang View point.',
    category: 'Travelling',
    date: '2021-12-04'
  }
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsDialogOpen(true);
  };

  const handlePrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = samplePhotos.findIndex(p => p.id === selectedPhoto.id);
    const previousIndex = currentIndex === 0 ? samplePhotos.length - 1 : currentIndex - 1;
    setSelectedPhoto(samplePhotos[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = samplePhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = currentIndex === samplePhotos.length - 1 ? 0 : currentIndex + 1;
    setSelectedPhoto(samplePhotos[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Photo Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            The place where you can know me more. Through the woods, foods, family, success, failures, achievements and more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {samplePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg"
                      >
                        <ZoomIn className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300">
                        {photo.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {photo.description}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                      {new Date(photo.date).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => handlePhotoClick(photo)}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-black/95 border-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedPhoto && (
                <div className="relative w-full h-full flex flex-col">
                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </Button>

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                    onClick={handleNext}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <motion.img
                      key={selectedPhoto.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Description */}
                  <div className="p-6 bg-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {selectedPhoto.title}
                      </h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {selectedPhoto.category}
                      </Badge>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                    <p className="text-white/70 text-sm mt-2">
                      {new Date(selectedPhoto.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
} 