type BradCrumbs = {
  category?: string;
  crumb?: string;
} & typeof defaultProps;

const defaultProps = {
  category: '',
  crumb: '',
};

const Category = {
  "men's clothing": '패션',
  "women's clothing": '패션',
  electronics: '디지털',
  jewelery: '액세서리',
};
const Breadcrumb = ({ category, crumb }: BradCrumbs) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>{Category[category] ? Category[category] : category}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
