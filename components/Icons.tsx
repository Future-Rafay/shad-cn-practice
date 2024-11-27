import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// Exporting the icons so that they can be used in other components

export const PlayIcon = (props : any) => <FontAwesomeIcon icon={faPlay} {...props} />;
export const PauseIcon = (props : any) => <FontAwesomeIcon icon={faPause} {...props} />;