import Sneakpeek from '@momogoyo/sneakpeek'
import { useRef } from 'preact/hooks'

export const App = () => {
  const sneakpeek = Sneakpeek
  const highlightButtonRef = useRef<HTMLButtonElement>(null)
  const simpleHighlightButtonRef = useRef<HTMLButtonElement>(null)
  const basicSneakRef = useRef<HTMLButtonElement>(null)
  const nonAnimatedSneakRef = useRef<HTMLButtonElement>(null)
  const asyncSneakRef = useRef<HTMLButtonElement>(null)
  const confirmExitSneakRef= useRef<HTMLButtonElement>(null)
  const progressSneakRef = useRef<HTMLButtonElement>(null)
  const progressTemplateSneakRef = useRef<HTMLButtonElement>(null)
  const apiTestSneakRef = useRef<HTMLButtonElement>(null)
  const reConfigureStepsSneakRef = useRef<HTMLButtonElement>(null)
  const disableKeyboardControlSneakRef = useRef<HTMLButtonElement>(null)

  const basicSteps = [
    {
      element: '.page-header',
      popover: {
        title: 'Sneakpeek은 무슨 툴일까요?',
        description: '서비스 사용법을 가이드라인을 통해서 투어를 시켜주는 툴입니다!',
        size: 'bottom',
        align: 'start',
      }
    },
    {
      element: '.page-header h1',
      popover: {
        title: 'Sneakpeek!',
        description: 'Sneakpeek title',
        size: 'left',
        align: 'start',
      }
    },
    {
      element: '.page-header sup',
      popover: {
        title: '서비스 맛보기',
        description: '서비스를 경험하기에 앞서 맛보기를 도와드릴게요!',
        size: 'bottom',
        align: 'start',
      }
    },
    {
      element: '.scrollable-area',
      popover: {
        title: 'Scrollable Area',
        description: '어쩌고 저쩌고 설명되어 있는 공간',
      }
    },
  ]

  const onClickBasic = (event: MouseEvent) => {
    if (!event) return

    const sneakObj = sneakpeek({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      steps: basicSteps,
    })

    sneakObj.taste()
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Sneakpeek! <sup>서비스 맛보기</sup></h1>
        <p>서비스를 경험하기에 앞서 맛보기를 도와드릴게요!</p>
      </div>

      <div className="buttons">
        <button ref={highlightButtonRef}>Highlight Button</button>
        <button ref={simpleHighlightButtonRef}>Simple Highlight Button</button>
      </div>

      <h2>맛보기 종류</h2>
      <p>맛보기의 종류는 여러가지가 있습니다!</p>
      <div className="buttons">
        <button ref={basicSneakRef} onClick={onClickBasic}>기본 맛보기</button>
        <button ref={nonAnimatedSneakRef}>애니메이션이 없이 맛보기</button>
        <button ref={asyncSneakRef}>비동기 맛보기</button>
        <button ref={confirmExitSneakRef}>확인하고 닫는 맛보기</button>
        <button ref={progressSneakRef}>프로세스 맛보기</button>
        <button ref={progressTemplateSneakRef}>프로세스 템플릿 맛보기</button>
        <button ref={apiTestSneakRef}>API 테스트 맛보기</button>
        <button ref={reConfigureStepsSneakRef}>재구성된 Steps로 맛보기</button>
        <button ref={disableKeyboardControlSneakRef}>키보드제어 못하게 맛보기</button>
      </div>

      <div className="scrollable-area">
        <p>First - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Second - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Third - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Fourth - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Fifth - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Sixth - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Seventh - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Eighth - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
        <p>Ninth - Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus sunt laborum natus praesentium similique temporibus, reprehenderit perferendis impedit, exercitationem expedita id tempora, obcaecati explicabo perspiciatis excepturi enim placeat numquam.</p>
      </div>
    </div>
  )
}
