import {
  DonateBtnsSection,
  BlickBtn,
  BlickSvg,
  BlickDotSvg,
  Btn,
  BlickName,
  BlickSection
} from "./Button.styled";

type IPropsBtn = {
  buttonTitle: string;
  link: string;
};

const Button = ({ buttonTitle, link }: IPropsBtn) => {
  return (
    <DonateBtnsSection>
      <BlickSection>
        <BlickBtn type="button">
          <a href="#">
            <BlickSvg>
              <use href="#icon-Blick">
                <symbol id="icon-Blick" viewBox="0 0 63 32">
                  <path d="M23.499 0.993h5.060v29.505h-5.060v-29.505zM33.049 11.174h5.059v19.325h-5.059v-19.325zM10.347 10.982c-0.003 0-0.007 0-0.010 0-1.662 0-3.224 0.434-4.577 1.194l0.047-0.024v-11.158h-5.060v19.85c0 0.003 0 0.006 0 0.009 0 2.034 0.604 3.927 1.642 5.509l-0.024-0.038c1.047 1.602 2.513 2.852 4.244 3.61l0.062 0.024c1.084 0.476 2.348 0.752 3.676 0.752 0.662 0 1.308-0.069 1.931-0.199l-0.061 0.011c1.944-0.41 3.621-1.366 4.912-2.697l0.002-0.002c1.308-1.348 2.239-3.068 2.618-4.987l0.010-0.063c0.37-1.913 0.181-3.896-0.545-5.7-0.744-1.827-1.962-3.332-3.502-4.406l-0.032-0.021c-1.49-1.039-3.338-1.66-5.331-1.663h-0.001zM10.347 25.59c-0.914 0-1.807-0.278-2.567-0.8-0.756-0.527-1.342-1.251-1.689-2.099l-0.011-0.032c-0.223-0.538-0.353-1.164-0.353-1.819 0-0.326 0.032-0.645 0.093-0.954l-0.005 0.031c0.179-0.921 0.619-1.767 1.265-2.431 0.622-0.642 1.429-1.102 2.335-1.294l0.030-0.005c0.271-0.058 0.582-0.091 0.902-0.091 0.638 0 1.246 0.133 1.796 0.372l-0.029-0.011c0.863 0.376 1.569 0.977 2.062 1.73l0.011 0.018c0.488 0.745 0.779 1.658 0.779 2.639 0 0.654-0.129 1.278-0.363 1.847l0.012-0.032c-0.244 0.598-0.583 1.11-1.003 1.543l0.001-0.001c-0.417 0.429-0.914 0.776-1.469 1.018l-0.030 0.012c-0.561 0.238-1.16 0.362-1.767 0.362zM54.751 30.5h6.518l-7.83-10.393 7.1-8.932h-5.91l-6.973 8.988v-19.167h-5.060v29.503h5.060l-0.004-10.314 7.1 10.314z"></path>
                </symbol>
              </use>
            </BlickSvg>
            <BlickDotSvg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.36611 5.10146C9.38229 2.58343 7.37519 0.528901 4.88314 0.512552C2.39108 0.496203 0.357756 2.52422 0.341576 5.04226C0.325395 7.56029 2.33249 9.61482 4.82454 9.63116C7.3166 9.64751 9.34993 7.6195 9.36611 5.10146Z"
                fill="url(#paint0_linear_2914_1806)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2914_1806"
                  x1="1.63847"
                  y1="8.26977"
                  x2="8.13499"
                  y2="1.9322"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E52F08" />
                  <stop offset="1" stop-color="#E94F96" />
                </linearGradient>
              </defs>
            </BlickDotSvg>
          </a>
        </BlickBtn>
        <BlickName>
          Phone:880224704<span> Name:Maksym Tishchenko</span>
        </BlickName>
      </BlickSection>

      <div>
        <Btn type="button">
          <a href={link}>{buttonTitle}</a>
        </Btn>
      </div>
    </DonateBtnsSection>
  );
};

export default Button;
