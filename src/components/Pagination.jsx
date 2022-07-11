import { ArrowLeft, ArrowRight } from "phosphor-react";

export function Pagination({ page, totalPages, onLeftClick, onRightClick }) {
  return (
    <div className="flex items-center">
      <button
        className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onLeftClick}
      >
        <ArrowLeft size={24} />
      </button>
      <div className="flex font-bold text-2xl items-center mx-8">
        <span>{page} de {totalPages}</span>
      </div>
      <button
        className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onRightClick}
      >
        <ArrowRight size={24} />
      </button>
    </div>
  )
}