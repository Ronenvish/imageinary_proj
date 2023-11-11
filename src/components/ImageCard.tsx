import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import ImagesModal from './ImagesModal';
import LazyLoad from 'react-lazy-load';

interface IImageCardProps {
  _id: number;
  name: string;
  description: string;
  photo: string;
  deleteImage: (id: number) => void;
  getDeletedImagesIDs: (id: number) => void;
  removeDeletedImagesIDs: (id: number) => void;
  isShaking: boolean;
}

const ImageCard = ({
  _id,
  name,
  description,
  photo,
  deleteImage,
  getDeletedImagesIDs,
  removeDeletedImagesIDs,
  isShaking = false,
}: IImageCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelectedToDelete, setIsSelectedToDelete] = useState(false);
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isShaking) setIsSelectedToDelete(false);
  }, [isShaking]);

  return (
    <>
      <section
        className={`rounded-xl group relative card ${
          (isHovered || isShaking) && 'animate-wiggle'
        }`}
      >
        <LazyLoad offset={100}>
          <img
            className={`w-full h-auto object-cover rounded-xl ${
              isSelectedToDelete && 'opacity-50'
            }`}
            src={photo}
            alt={description}
            loading='lazy'
          />
        </LazyLoad>
        {isShaking ? (
          <div
            className='group-hover:flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-md opacity-50 text-center'
            onClick={() => {
              if (isSelectedToDelete) removeDeletedImagesIDs(_id);
              else getDeletedImagesIDs(_id);
              setIsSelectedToDelete((prev) => !prev);
            }}
          >
            select to delete
          </div>
        ) : (
          <>
            <div className='group-hover:flex max-h-[94.5%] hidden absolute top-0 left-100 right-0 bg-white rounded-full items-center justify-center m-2 p-1'>
              <AiOutlineExpandAlt
                className='cursor-pointer z-10 mr-2'
                onClick={() => {
                  setIsModalOpen(true);
                }}
              />
              <MdDeleteForever
                className='cursor-pointer z-10'
                onClick={() => {
                  deleteImage(_id);
                }}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
              <p className='text-white text-xs md:text-sm overflow-y-auto font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
                {name}
              </p>
              <div className='mt-5 flex justify-between items-center gap-2'>
                <div className='flex items-center gap-4 text-ellipsis overflow-hidden whitespace-nowrap'>
                  <div className='w-5 h-5 flex justify-center items-center text-white text-xs font-bold border-b-2'>
                    {_id}
                  </div>
                  <p className='text-white text-xs md:text-sm text-ellipsis overflow-hidden whitespace-nowrap'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <ImagesModal
        isModalOpen={isModalOpen}
        imageUrl={photo}
        closeModalFunction={closeModalHandler}
      />
    </>
  );
};

export default ImageCard;
