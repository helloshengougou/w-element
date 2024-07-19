import { makeInstaller } from '@w-element/utils';
import components from './components';
import '@w-element/theme/index.css';
const installer = makeInstaller(components);
export * from '@w-element/components';
export default installer;
