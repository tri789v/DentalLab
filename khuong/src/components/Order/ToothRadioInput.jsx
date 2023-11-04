import React from "react";

export default function ToothRadioInput({setSelectedTeethPosition}) {
  const handleSelectTeethRadioInput = (e) => {
    if (e) {
      e.target.disabled = true;
      setSelectedTeethPosition(e.target.value);
    }
  };

  return (
    <div class="grid grid-rows-2 grid-flow-col gap-4 text-center">
      <div>
        <img src="./imgMenu/r1.png" className="max-w-2rem" />
        <p class="text-base">1-8</p>
        <input
          type="radio"
          id="8"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={8}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>

      <div>
        <img src="./imgMenu/r32.png" className="max-w-2rem" />
        <p class="text-base">4-8</p>
        <input
          type="radio"
          id="32"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={32}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r2.png" className="max-w-2rem" />
        <p class="text-base">1-7</p>
        <input
          type="radio"
          id="7"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={7}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r31.png" className="max-w-2rem" />
        <p class="text-base">4-7</p>
        <input
          type="radio"
          id="31"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={31}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r3.png" className="max-w-2rem" />
        <p class="text-base">1-6</p>
        <input
          type="radio"
          id="6"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={6}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r30.png" className="max-w-2rem" />
        <p class="text-base">4-6</p>
        <input
          type="radio"
          id="30"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={30}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r4.png" className="max-w-2rem" />
        <p class="text-base">1-5</p>
        <input
          type="radio"
          id="5"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={5}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r29.png" className="max-w-2rem" />
        <p class="text-base">4-5</p>
        <input
          type="radio"
          id="29"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={29}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r5.png" className="max-w-2rem" />
        <p class="text-base">1-4</p>
        <input
          type="radio"
          id="4"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={4}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r28.png" className="max-w-2rem" />
        <p class="text-base">4-4</p>
        <input
          type="radio"
          id="28"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={28}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r6.png" className="max-w-2rem" />
        <p class="text-base">1-3</p>
        <input
          type="radio"
          id="3"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={3}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r27.png" className="max-w-2rem" />
        <p class="text-base">4-3</p>
        <input
          type="radio"
          id="27"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={27}
          onChange={(e) => handleSelectTeethRadioInput(27)}
        />
      </div>
      <div>
        <img src="./imgMenu/r7.png" className="max-w-2rem" />
        <p class="text-base">1-2</p>
        <input
          type="radio"
          id="2"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={2}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r26.png" className="max-w-2rem" />
        <p class="text-base">4-2</p>
        <input
          type="radio"
          id="26"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={26}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r8.png" className="max-w-2rem" />
        <p class="text-base">1-1</p>
        <input
          type="radio"
          id="1"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={1}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r25.png" className="max-w-2rem" />
        <p class="text-base">4-1</p>
        <input
          type="radio"
          id="25"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={25}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r9.png" className="max-w-2rem" />
        <p class="text-base">2-1</p>
        <input
          type="radio"
          id="9"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={9}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r24.png" className="max-w-2rem" />
        <p class="text-base">3-1</p>
        <input
          type="radio"
          id="17"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={17}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r10.png" className="max-w-2rem" />
        <p class="text-base">2-2</p>
        <input
          type="radio"
          id="10"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={10}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r23.png" className="max-w-2rem" />
        <p class="text-base">3-2</p>
        <input
          type="radio"
          id="18"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={18}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r11.png" className="max-w-2rem" />
        <p class="text-base">2-3</p>
        <input
          type="radio"
          id="11"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={11}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r22.png" className="max-w-2rem" />
        <p class="text-base">3-3</p>
        <input
          type="radio"
          id="19"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={19}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r12.png" className="max-w-2rem" />
        <p class="text-base">2-4</p>
        <input
          type="radio"
          id="12"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={12}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r21.png" className="max-w-2rem" />
        <p class="text-base">3-4</p>
        <input
          type="radio"
          id="20"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={20}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r13.png" className="max-w-2rem" />
        <p class="text-base">2-5</p>
        <input
          type="radio"
          id="13"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={13}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r20.png" className="max-w-2rem" />
        <p class="text-base">3-5</p>
        <input
          type="radio"
          id="21"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={21}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r14.png" className="max-w-2rem" />
        <p class="text-base">2-6</p>
        <input
          type="radio"
          id="14"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={14}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r19.png" className="max-w-2rem" />
        <p class="text-base">3-6</p>
        <input
          type="radio"
          id="22"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={22}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r15.png" className="max-w-2rem" />
        <p class="text-base">2-7</p>
        <input
          type="radio"
          id="15"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={15}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r18.png" className="max-w-2rem" />
        <p class="text-base">3-7</p>
        <input
          type="radio"
          id="23"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={23}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r16.png" className="max-w-2rem" />
        <p class="text-base">2-8</p>
        <input
          type="radio"
          id="16"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={16}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
      <div>
        <img src="./imgMenu/r17.png" className="max-w-2rem" />
        <p class="text-base">3-8</p>
        <input
          type="radio"
          id="24"
          name="tooth-position"
          className="radio checkbox-xs checkbox-info"
          value={24}
          onChange={(e) => handleSelectTeethRadioInput(e)}
        />
      </div>
    </div>
  );
}
