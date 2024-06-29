import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white text-black rounded-lg p-6 max-w-lg mx-auto z-50 shadow-lg relative overflow-auto" style={{height: '40rem', width:"60rem"}}>
        <h2 className="text-xl font-bold mb-4">Response</h2>
        <div className="mb-6">
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
