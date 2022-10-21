import React, { useEffect, useState } from "react";
import star from "../assets/icon-star.svg";
import imageEnd from "../assets/illustration-thank-you.svg";
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
  SubmitContentResponsiveImage,
  SubmitContentValueOf,
  SubmitContentImage,
  SubmitContentTitle,
  SubmitContentText,
  SubmitContentValueOfFather,
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
  const [numberSel, setNumberSel] = useState<number>(0);
  const handleClick = (id: number) => {
    const moreVar = [...optionRender];
    moreVar.map((item) => {
      if (item.active) {
        item.active = false;
      }
    });
    setOptionRender(moreVar);
    const varTemp: numbers[] = [...optionRender];
    let varfind: numbers | undefined = varTemp.find(
      (item) => item.numberSelect === id
    );
    if (varfind !== undefined) {
      varfind.active = !varfind.active;
    }
    setOptionRender(varTemp);
  };
  const handleChangePage = (): void => {
    setCheck(false);
    const varTemp: numbers[] = [...optionRender];
    let varfind: numbers | undefined = varTemp.find(
      (item) => item.active === true
    );
    if (varfind !== undefined) {
      setNumberSel(varfind.numberSelect);
    }
  };
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
                    <NoSubmitButtonChoice
                      key={item.numberSelect}
                      onClick={() => handleClick(item.numberSelect)}
                    >
                      {item.numberSelect}
                    </NoSubmitButtonChoice>
                  ) : (
                    <NoSubmitButtonChoiceActive key={item.numberSelect}>
                      {item.numberSelect}
                    </NoSubmitButtonChoiceActive>
                  )
                )}
              </NoSubmitButtonContent>
              <NoSubmitButtonSubmit onClick={handleChangePage}>
                SUBMIT
              </NoSubmitButtonSubmit>
            </ModalContentNoSubmit>
          </>
        )}
        {!check && (
          <>
            <ModalContentSubmit>
              <SubmitContentResponsiveImage>
                <SubmitContentImage src={imageEnd} />
              </SubmitContentResponsiveImage>
              <SubmitContentValueOfFather>
                <SubmitContentValueOf>
                  Your selected {numberSel} out of 5
                </SubmitContentValueOf>
              </SubmitContentValueOfFather>
              <SubmitContentTitle>Thank you!</SubmitContentTitle>
              <SubmitContentText>
                We appreciate you taking the time to give a rating. <br /> If
                you ever need more support, don't hesitate to get in touch!
              </SubmitContentText>
            </ModalContentSubmit>
          </>
        )}
      </ModalContent>
    </BgCenterModal>
  );
}
