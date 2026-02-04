"use client";
import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HeaderCards } from "@/components/study-mode/components/header-cards";
import FlashcardListItem from "@/components/study-mode/components/flashcard/flashcard-list-item";
import { FLASHCARDS_DATA } from "@/components/study-mode/study-mode.constants";

const ValidationSchema = Yup.object().shape({
  question: Yup.string().required("Please enter a question."),
  answer: Yup.string().required("Please enter an answer."),
  category: Yup.string().required("Please enter a category."),
});

export default function AllCardsPage() {
  const [cards, setCards] = useState(FLASHCARDS_DATA);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hideMastered, setHideMastered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
      category: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const newCard = {
        id: `fc-${Date.now()}`,
        question: values.question,
        answer: values.answer,
        category: values.category,
        knownCount: 0,
      };

      setCards([newCard, ...cards]);
      resetForm();
    },
  });

  const filteredCards = useMemo(() => {
    let result = cards;
    if (selectedCategories.length > 0) {
      result = result.filter((card) => selectedCategories.includes(card.category));
    }
    if (hideMastered) {
      result = result.filter((card) => card.knownCount < 5);
    }
    return result;
  }, [cards, selectedCategories, hideMastered]);

  const handleShuffle = () => {
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleDeleteCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden scrollbar-hide py-8 px-4">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-12">
        
        
        <div className="rounded-[20px] border-[2px] border-[#2e1401] bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-[#2e1401]">Question</label>
              <input
                type="text"
                name="question"
                value={formik.values.question}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="e.g., What is the capital of France?"
                className={`w-full rounded-[12px] border-[2px] p-4 text-lg outline-none transition-all ${
                  formik.touched.question && formik.errors.question
                    ? "border-pink-500 bg-pink-50/10"
                    : "border-[#a1b0d0] focus:border-[#2e1401]"
                }`}
              />
              {formik.touched.question && formik.errors.question && (
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-sm ml-2">
                  <ErrorIcon className="w-4 h-4" />
                  <span>{formik.errors.question}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-[#2e1401]">Answer</label>
              <textarea
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="e.g., Paris"
                rows={2}
                className={`w-full rounded-[12px] border-[2px] p-4 text-lg outline-none transition-all ${
                  formik.touched.answer && formik.errors.answer
                    ? "border-pink-500 bg-pink-50/10"
                    : "border-[#2e1401]/20 focus:border-[#2e1401]"
                }`}
              />
              {formik.touched.answer && formik.errors.answer && (
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-sm ml-2">
                  <ErrorIcon className="w-4 h-4" />
                  <span>{formik.errors.answer}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-[#2e1401]">Category</label>
              <input
                type="text"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="e.g., Geography"
                className={`w-full rounded-[12px] border-[2px] p-4 text-lg outline-none transition-all ${
                  formik.touched.category && formik.errors.category
                    ? "border-pink-500 bg-pink-50/10"
                    : "border-[#2e1401]/20 focus:border-[#2e1401]"
                }`}
              />
              {formik.touched.category && formik.errors.category && (
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-sm ml-2">
                  <ErrorIcon className="w-4 h-4" />
                  <span>{formik.errors.category}</span>
                </div>
              )}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-[100px] border-[2px] border-[#2e1401] bg-[#ffcc00] px-8 py-3 text-lg font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-[#2e1401]">
                  <PlusIcon className="w-4 h-4" />
                </div>
                Create Card
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-[20px] border-[2px] border-[#2e1401] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <HeaderCards 
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              hideMastered={hideMastered}
              onToggleHideMastered={setHideMastered}
              onShuffle={handleShuffle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.slice(0, visibleCount).map((card) => (
              <FlashcardListItem 
                key={card.id}
                {...card}
                onDelete={() => handleDeleteCard(card.id)}
              />
            ))}
          </div>

          {filteredCards.length > visibleCount && (
            <div className="flex justify-center mt-4 mb-8">
              <button
                onClick={handleLoadMore}
                className="rounded-[100px] border-[2px] border-[#2e1401] bg-white px-10 py-3 text-lg font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none"
              >
                Load more
              </button>
            </div>
          )}

          {filteredCards.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <p className="text-2xl font-black text-[#2e1401]/20">No cards found matching your filters</p>
              <button 
                onClick={() => { setSelectedCategories([]); setHideMastered(false); }}
                className="text-lg font-black text-[#2e1401] underline decoration-yellow-500 decoration-4 underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}
