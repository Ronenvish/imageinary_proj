import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'max-height': '85%',
    'max-width': '85%',
  },
};

interface IImagesModalProps {
  isModalOpen: boolean;
  imageUrl: string;
  closeModalFunction: () => void;
}

const ImagesModal = ({
  isModalOpen,
  imageUrl,
  closeModalFunction,
}: IImagesModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModalFunction}
      style={customStyles}
      contentLabel='Image Modal'
    >
      <div className='max-h-[94.5%] absolute top-0 left-100 right-0 bg-[#ffffff] rounded-full items-center justify-center m-2 p-1'>
        <IoIosClose onClick={closeModalFunction} className='cursor-pointer' />
      </div>

      <img src={imageUrl} alt='image' />
    </Modal>
  );
};

export default ImagesModal;
