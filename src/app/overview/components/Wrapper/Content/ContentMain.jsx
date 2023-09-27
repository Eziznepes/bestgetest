import { OverProdList, OverSuperList } from "../../OverviewModul";
import CardItem from "../CardItem";

export default function ContentMain() {
  return (
    <div className="content">
      <div className="contentOver">
        <div className="contentOver__super">
          <div className="contentOver__super-tag">super aanbiedingen</div>
          <div className="cards">
            {OverSuperList.map((item, index) => {
              return <CardItem itemData={item} key={index} />;
            })}
          </div>
        </div>
        <div className="contentOver__main">
          <div className="cards">
            {OverProdList.map((item, index) => {
              return <CardItem itemData={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
