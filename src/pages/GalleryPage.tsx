import { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import { fetchImages } from '../services/axiosImagesService';
import { Photo } from '../types';
import SideFeatures from '../components/SideFeatures';

const GalleryPage = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [isTrashClicked, setIsTrashClicked] = useState(false);
  const [imagesDeletedID, setImagesDeletedID] = useState<number[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const res = (await fetchImages()) as Photo[];
      setImages((prev) => [...prev, ...res]);
    };
    getImages();
  }, []);

  const deleteImage = (id: number) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  const getDeletedImagesID = (id: number) => {
    setImagesDeletedID((prev) => [...prev, id]);
  };

  const removeDeletedImagesID = (id: number) => {
    setImagesDeletedID((prev) => prev.filter((imageID) => imageID !== id));
  };

  const deleteMultipleImages = () => {
    setImages((prev) =>
      prev.filter((image) => !imagesDeletedID.includes(image.id))
    );
    setImagesDeletedID([]);
  };

  const onTrashButtonClickFunction = () => {
    setIsTrashClicked((prev) => !prev);
    setImagesDeletedID([]);
  };

  const onAddButtonClickFunction = (imageUrl: string) => {
    setImages((prev) => [
      ...prev,
      {
        url: imageUrl,
        title: 'new user image',
        user: prev.length + 1,
        description: 'new user image',
        id: prev.length + 1,
      },
    ]);
  };

  const renderImages = images.map((image, index) => {
    return (
      <ImageCard
        _id={image.id}
        name={image.title}
        description={image.description}
        photo={image.url}
        key={index}
        deleteImage={deleteImage}
        getDeletedImagesIDs={getDeletedImagesID}
        removeDeletedImagesIDs={removeDeletedImagesID}
        isShaking={isTrashClicked}
      />
    );
  });

  return (
    <section className='px-5 py-5 relative sm:px-10 sm:py-10 md:px-20'>
      <div className='grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        {renderImages}
      </div>
      <SideFeatures
        onAddButtonClick={onAddButtonClickFunction}
        onTrashButtonClick={onTrashButtonClickFunction}
        deleteSelectedImages={deleteMultipleImages}
      />
    </section>
  );
};

export default GalleryPage;
