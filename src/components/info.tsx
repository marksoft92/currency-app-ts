import { Alert } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

const messages = {
  requiredInstall: <FormattedMessage id="requiredInstall" />,
  howToUseSteps: [
    <FormattedMessage id="home.howToUse.step1" />,
    <FormattedMessage id="home.howToUse.step2" />,
    <FormattedMessage id="home.howToUse.step3" />,
  ],
  technologiesUsed: [
    <FormattedMessage id="home.technologiesUsed.react" />,
    <FormattedMessage id="home.technologiesUsed.typescript" />,
    <FormattedMessage id="home.technologiesUsed.reactRouter" />,
    <FormattedMessage id="home.technologiesUsed.esLint" />,
    <FormattedMessage id="home.technologiesUsed.otherLibraries" />,
  ],
};

const StepList: React.FC<{ steps: React.ReactNode[] }> = ({ steps }) => (
  <ol>
    {steps.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>
);

const InfoPage: React.FC = () => {
  return (
    <div className="container-info">
      <h1>
        <FormattedMessage id="title.homePage" />
      </h1>
      <Alert
        message={messages.requiredInstall}
        type="warning"
        closable
        banner
      />
      &nbsp;
      <h2>
        <FormattedMessage id="home.howToUse.title" />
      </h2>
      <StepList steps={messages.howToUseSteps} />
      <h2>
        <FormattedMessage id="home.technologiesUsed.title" />
      </h2>
      <StepList steps={messages.technologiesUsed} />
    </div>
  );
};

export default InfoPage;
