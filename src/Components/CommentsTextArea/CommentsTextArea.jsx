import React from "react";

export default function CommentsTextArea() {
  return (
    <div className="flex flex-col">
      <span className="text-text text-3xl mb-4 font-bold">
        Write your opinion
      </span>
      <div className="flex flex-col">
        <span className="text-2xl mb-3 text-text font-medium">* Opinion *</span>
        <textarea className="h-72 rounded-lg border-2 border-solid border-[#dcdcdc] shadow"></textarea>
      </div>
      <button
        type="submit"
        className="mt-8 max-w-60 py-3.5 px-7 bg-accent text-white border-none rounded-lg text-2xl mb-12 hover:bg-text hover:text-accent"
      >
        Submit a comment
      </button>
    </div>
  );
}
