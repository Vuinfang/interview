import * as React from 'react';
import Svg, {Circle, G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
export default function Share(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="19.92" viewBox="0 0 18 19.92">
      <Defs>
        <ClipPath id="clip-path">
          <Path id="Mask" d="M15,14.08a2.912,2.912,0,0,0-1.96.77L5.91,10.7A3.274,3.274,0,0,0,6,10a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,12,3a3.274,3.274,0,0,0,.09.7L5.04,7.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,15,14.08Z" transform="translate(3 2)" fill="#ffa92c"/>
        </ClipPath>
      </Defs>
      <G id="Mask-2" data-name="Mask" transform="translate(-3 -2)" clip-path="url(#clip-path)">
        <G id="_" data-name="↪🎨">
          <Rect id="Atoms_Colors_Black" data-name="Atoms / Colors / Black" width="24" height="24" fill="#ffa92c"/>
        </G>
      </G>
    </Svg>
  );
}
