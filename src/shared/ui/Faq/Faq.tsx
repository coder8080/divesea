import { createSelector, createSignal, For } from "solid-js"
import QUESTIONS from "~/shared/data/questions"
import Question from "~/shared/ui/Question"

const Faq = () => {
  const [activeId, setActiveId] = createSignal<string | null>(null)
  const isActive = createSelector(activeId)

  return (
    <div class="flex flex-col items-center gap-[4px] lg:px-[70px]">
      <For each={QUESTIONS}>
        {(item) => (
          <Question
            {...item}
            isActive={isActive(item.id)}
            onClick={() => setActiveId(activeId() === item.id ? null : item.id)}
          />
        )}
      </For>
    </div>
  )
}

export default Faq
