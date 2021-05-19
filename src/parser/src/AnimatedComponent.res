let generateAnimatedComponent = (~animationCode, ~componentName) => {
  let result = "
    import styled, { keyframes } from 'styled-components';
    import BaseAnimation from '../BaseAnimation';

    const ${componentName}Animation = keyframes`
      ${animationCode}
    `;

    const ${componentName} = styled(BaseAnimation)`
      animation-name: ${${componentName}Animation};
    `;

    export default ${componentName};
  "

  let replaceComponentName = Js.String.replaceByRe(%re("/\${componentName}/g"), componentName)
  let replaceAnimationCode = Js.String.replaceByRe(%re("/\${animationCode}/g"), animationCode)

  result->replaceComponentName->replaceAnimationCode
}
