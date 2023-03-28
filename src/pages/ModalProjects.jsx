const ModalProjects = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
      onClick={() => onClose()}
    >
      <div className="w-[800px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
        <div className="h-96 bg-[#9ad6a8] text-[#1e1c21] text-center text-5xl py-4 rounded-[24px]">
          My projects
        </div>
      </div>
    </div>
  );
};
export default ModalProjects;
