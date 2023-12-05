import { css } from "../../styled-system/css";
import { center, circle, hstack, stack } from "../../styled-system/patterns";
export default function Home() {
  return (
    <div className={center({ height: "100vh" })}>
      <div
        className={css({
          border: "3px solid #000000",
          boxShadow: "4px 4px 0px #000000",
          borderRadius: "13px",
          padding: 6,
          maxWidth: "388px",
        })}
      >
        <div className={stack({ gap: 4 })}>
          <div className={hstack({ gap: 4 })}>
            <div className={circle({ size: 12, overflow: "hidden" })}>
              <img
                src="https://avatars.githubusercontent.com/u/834149?v=4"
                alt="Carlton Joseph"
                height="120px"
                width="120px"
              />
            </div>
            <div>
              <h2 className={css({ fontWeight: "600" })}>Carlton Joseph</h2>
              <p className={css({ color: "gray.400" })}>@carlton_joseph</p>
            </div>
          </div>
          <blockquote className={css({ fontSize: "17px" })}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            animi inventore fugiat perspiciatis nulla suscipit! Eaque tempora
            praesentium tempore similique!
          </blockquote>
        </div>
      </div>
    </div>
  );
}
