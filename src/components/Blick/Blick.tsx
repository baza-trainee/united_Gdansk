import { Content } from "@/types/contentType";
import {
  BlickInfo,
  BlickName,
  BlickPhone,
  BlickSection,
  BlickText,
  BlickTitle,
  BlickWrapper,
} from "./Blick.styled";
import { useState } from "react";

type IBlick = {
  content?: Content;
};

const copyToClipboard = (textToCopy: string | undefined) => {
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
  }
};

const Blick = ({ content }: IBlick) => {
  
  const [copied, setCopied] = useState(false);

  return (
    <BlickSection>
      <BlickTitle>{content?.blick.title}</BlickTitle>
      <BlickText>{content?.blick.text}</BlickText>
      <BlickWrapper>
        <BlickName>{content?.blick.name}</BlickName>

        <BlickPhone
          onClick={() => {
            copyToClipboard(content?.blick.phone);
            setCopied(true);
          }}
        >
          {content?.blick.phone}
          {copied ? (
            <svg
              style={{ marginLeft: 5 }}
              width={20}
              height={20}
              fill="#008000"
              viewBox="0 0 24 24"
            >
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
            </svg>
          ) : (
            <svg
              style={{ marginLeft: 5 }}
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
            </svg>
          )}
        </BlickPhone>
      </BlickWrapper>
      <BlickInfo>{content?.blick.copy}</BlickInfo>
    </BlickSection>
  );
};

export default Blick;
