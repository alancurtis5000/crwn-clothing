import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionOverview);
