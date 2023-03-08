import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const dispactch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const clickCheckStatus = () => {
    dispactch(checkStatus());
  };

  return (
    <>
      <div>
        <h2>
          {categories}
        </h2>
        <button type="button" className="button key" onClick={clickCheckStatus}>Check status</button>
      </div>
    </>
  );
}
