import { AiOutlinePlus } from 'react-icons/ai';
import { GoTrash } from 'react-icons/go';
import { TbTrashOff } from 'react-icons/tb';
import { useState } from 'react';
import AddImageUrlModal from './AddImageUrlModal';

interface ISideFeaturesProps {
  onTrashButtonClick: () => void;
  onAddButtonClick: (imageUrl: string) => void;
  deleteSelectedImages: () => void;
}

const SideFeatures = ({
  onTrashButtonClick,
  onAddButtonClick,
  deleteSelectedImages,
}: ISideFeaturesProps) => {
  const [isDeleteAllImages, setIsDeleteAllImages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='fixed bottom-10 right-0 flex justify-center items-center flex-col m-5'>
        <div
          className='w-8 h-8 rounded-full bg-indigo-600 flex justify-center items-center text-white text-xs font-bold mb-2 cursor-pointer'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <AiOutlinePlus className='hover:animate-ping' />
        </div>
        <div
          className='w-8 h-8 rounded-full bg-indigo-600 flex justify-center items-center text-white text-xs font-bold mb-2 cursor-pointer'
          onClick={() => {
            setIsDeleteAllImages((prev) => !prev);
            onTrashButtonClick();
          }}
        >
          <GoTrash className='hover:animate-ping' />
        </div>
        <div
          className={`${
            !isDeleteAllImages && 'invisible'
          } relative w-8 h-8 rounded-full bg-indigo-600 flex justify-center items-center text-white text-xs font-bold cursor-pointer`}
          onClick={deleteSelectedImages}
        >
          <span
            className='absolute animate-ping w-6 h-6 rounded-full bg-indigo-800 flex justify-center items-center text-white text-xs font-bold cursor-pointer'
            onClick={deleteSelectedImages}
          ></span>
          <TbTrashOff className='' />
        </div>
      </div>
      <AddImageUrlModal
        isModalOpen={isModalOpen}
        closeModalFunction={closeModalHandler}
        onAddButtonClickFunction={onAddButtonClick}
      />
    </>
  );
};

export default SideFeatures;
