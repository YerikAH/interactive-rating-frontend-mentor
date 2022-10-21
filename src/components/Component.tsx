import React, { useEffect, useState } from "react";
import star from "../assets/icon-star.svg";
import {
  BgCenterModal,
  ModalContent,
  ModalContentSubmit,
  ModalContentNoSubmit,
  NoSubmitCircle,
  NoSubmitCircleImage,
  NoSubmitTitle,
  NoSubmitText,
  NoSubmitButtonContent,
  NoSubmitButtonChoice,
  NoSubmitButtonSubmit,
  NoSubmitButtonChoiceActive,
} from "./Styles";
export default function Component() {
  type numbers = {
    numberSelect: number;
    active: boolean;
  };
  const initialState: numbers[] = [
    {
      numberSelect: 1,
      active: false,
    },
    {
      numberSelect: 2,
      active: false,
    },
    {
      numberSelect: 3,
      active: false,
    },
    {
      numberSelect: 4,
      active: false,
    },
    {
      numberSelect: 5,
      active: false,
    },
  ];

  const [check, setCheck] = useState<boolean>(true);
  const [optionRender, setOptionRender] = useState<numbers[]>([]);

  useEffect(() => {
    setOptionRender(initialState);
  }, []);

  return (
    <BgCenterModal>
      <ModalContent>
        {check && (
          <>
            <ModalContentNoSubmit>
              <NoSubmitCircle>
                <NoSubmitCircleImage src={star} />
              </NoSubmitCircle>
              <NoSubmitTitle>How did we do?</NoSubmitTitle>
              <NoSubmitText>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </NoSubmitText>
              <NoSubmitButtonContent>
                {optionRender.map((item) =>
                  !item.active ? (
                    <NoSubmitButtonChoice onClick={handleClick}>
                      {item.numberSelect}
                    </NoSubmitButtonChoice>
                  ) : (
                    <NoSubmitButtonChoiceActive>
                      {item.numberSelect}
                    </NoSubmitButtonChoiceActive>
                  )
                )}
              </NoSubmitButtonContent>
              <NoSubmitButtonSubmit>SUBMIT</NoSubmitButtonSubmit>
            </ModalContentNoSubmit>
          </>
        )}
        {!check && (
          <>
            <ModalContentSubmit></ModalContentSubmit>
          </>
        )}
      </ModalContent>
    </BgCenterModal>
  );
}
