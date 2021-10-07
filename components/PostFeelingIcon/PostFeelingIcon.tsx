import React from "react";
import Image from "next/image";
export default function PostFeelingIcon() {
  return (
    <div className="ass1-section__feeling">
      <div className="ass1-feeling">
        <a href="#" rel="tooltip" data-original-title="Happy">
          <Image src="/emotion/svg/Happy.svg" alt="Happy" height={50} width={50} />
          <span>126</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Lol">
          <Image src="/emotion/svg/LOL.svg" alt="LOL" height={50} width={50} />
          <span>256</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Surprised">
          <Image src="/emotion/svg/Surprised.svg" alt="" height={50} width={50} />
          <span>741</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Sad">
          <Image src="/emotion/svg/Sad.svg" alt="" height={50} width={50} />
          <span>2K</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Tongue Out">
          <Image src="/emotion/svg/Tongue_Out.svg" alt="" height={50} width={50} />
          <span>245</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="No words">
          <Image src="/emotion/svg/No_words.svg" alt="" height={50} width={50} />
          <span>237</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Love">
          <Image src="/emotion/svg/Love.svg" alt="" height={50} width={50} />
          <span>1,236</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Blushing">
          <Image src="/emotion/svg/Blushing.svg" alt="" height={50} width={50} />
          <span>365</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Cool">
          <Image src="/emotion/svg/Cool.svg" alt="" height={50} width={50} />
          <span>412</span>
        </a>
        <a href="#" rel="tooltip" data-original-title="Angry">
          <Image src="/emotion/svg/Angry.svg" alt="" height={50} width={50} />
          <span>478</span>
        </a>
      </div>
    </div>
  );
}
