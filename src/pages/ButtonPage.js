import Button from "../components/Button";
import {
  GoThumbsup,
  GoHeart,
  GoCircleSlash,
  GoEyeClosed,
  GoEye,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
  };

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick} className="m-3">
          <GoThumbsup />
          Like
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoHeart />
          Buy now
        </Button>
      </div>
      <div>
        <Button success>
          <GoEye />
          See deal
        </Button>
      </div>
      <div>
        <Button warning>
          <GoEyeClosed />
          Hide ads
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCircleSlash />
          Remove
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
