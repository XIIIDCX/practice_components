import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
    return <Modal></Modal>;
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Do you accept this terms?
    </Modal>
  );

  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          Open Modal
        </Button>
        {showModal && modal}
      </div>
      <p>
        Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit..." "There is no one who loves pain
        itself, who seeks after it and wants to have it, simply because it is
        pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent ornare nec nisl eu sagittis. Integer feugiat, sem eu tristique
        bibendum, lectus lacus sollicitudin sapien, a viverra lectus sapien non
        orci. Curabitur mollis tristique arcu non iaculis. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Morbi quis risus blandit, tempor ligula et, sollicitudin ante. Nulla
        efficitur dolor lectus, nec maximus tortor luctus a. Aliquam quis augue
        dapibus, tincidunt ante id, aliquet massa. Donec eu arcu lectus. Nam dui
        ex, feugiat in ullamcorper ac, tempus et ligula. Sed semper sollicitudin
        diam. Quisque hendrerit ante at velit dignissim accumsan. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aliquam dui quam, efficitur porttitor dui ut, sollicitudin
        congue ipsum. Pellentesque non justo ac leo mattis molestie. Aliquam
        cursus imperdiet augue et malesuada. Cras euismod justo leo, sed
        volutpat ligula vehicula id. Donec elementum vel orci vitae vestibulum.
        Duis malesuada tincidunt diam in hendrerit. Nam sit amet lectus non nunc
        dignissim tempus. Quisque in scelerisque odio. Aliquam nec sagittis
        justo. In fermentum semper elit, placerat facilisis leo accumsan ut.
        Vivamus rhoncus, turpis eu gravida congue, libero neque auctor mi, sit
        amet accumsan purus mauris imperdiet leo. Maecenas elit augue, pretium
        eget placerat sed, porttitor et lorem. Curabitur turpis ligula, mattis
        ac tortor ut, porttitor rhoncus arcu. Pellentesque luctus, velit vel
        aliquam laoreet, mauris massa ullamcorper turpis, a gravida urna nisl
        vel sem. In tristique varius tempus. Pellentesque rhoncus augue vitae
        tortor iaculis hendrerit. Curabitur a mauris nec massa auctor
        scelerisque. Integer vel lorem vitae risus tristique laoreet eu in
        dolor. Curabitur vestibulum commodo pellentesque. Nam auctor
        pellentesque tempus. Nunc tellus arcu, facilisis at justo vel, faucibus
        sagittis lacus. Praesent vulputate ipsum eget ex interdum, in commodo
        elit feugiat. Sed et ex magna. Aenean porttitor maximus tellus sit amet
        ornare. Maecenas non nibh mauris. Nunc sed tempor dui. Vestibulum a
        ipsum porta, viverra nisl eget, tempor ante. Aliquam porta lacinia
        massa, vitae scelerisque leo pretium ut. Praesent posuere urna orci,
        euismod consectetur arcu tristique commodo. Suspendisse quis cursus sem,
        sit amet egestas quam. Nunc sem libero, aliquet vitae arcu ac, bibendum
        iaculis tortor. Cras quis bibendum nibh. Proin egestas volutpat lectus
        eu malesuada. Integer laoreet urna vel quam placerat sollicitudin. Ut
        auctor neque quis convallis pulvinar. Curabitur non eros non dui cursus
        sodales et ac sem. Nulla ut pretium ligula. In non feugiat nulla. Nam
        tincidunt arcu id mauris viverra vestibulum. Ut bibendum elit a odio
        facilisis, sed tempor sapien malesuada. Nulla fringilla non justo vel
        mattis. Cras vitae imperdiet dui, vitae rhoncus est. Pellentesque
        hendrerit neque nec nisi pretium facilisis. Morbi nulla eros, auctor sed
        leo ac, feugiat ultrices neque. Donec eget mi euismod, hendrerit velit
        semper, scelerisque justo. Suspendisse feugiat lorem nulla. Vivamus odio
        turpis, aliquam id libero non, pharetra lobortis orci. Maecenas id ante
        neque. Aliquam erat volutpat.
      </p>
    </div>
  );
};

export default ModalPage;
