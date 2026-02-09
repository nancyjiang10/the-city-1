import React from "react";
import { PageLayout } from "../components/PageLayout";

const byline = [
  {
    name: "Nancy Jiang",
    url: "https://www.latimes.com/people/nobody",
  },
];

export const Homepage = () => (
  <PageLayout>
    <div>
      <div className="container">
        <h1 className="headline">Brooklyn, Queens, and the Bronx Grow Increasingly Gentrified As Mamdani Prepares to Deliver on Housing Agenda</h1>
        <div className="attribution">
          <p className="byline">
            By{" "}
            {byline.map((author, i) => (
              <span key={i} className="author">
                <a href={author.url}>{author.name}</a>
                {i < byline.length - 2
                  ? ", "
                  : i < byline.length - 1
                  ? " and "
                  : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <br />

      <div className="container">
        <p className="copy">
          New York City's mayor-elect Zohran Mamdani seeks to advance his affordability housing agenda as he enters Gracie Mansion in January, but housing data shows that neighborhoods in Central and Eastern Brooklyn, Queens, and the Bronx are increasingly gentrifying, with affordable housing units built for higher-income residents. 
        </p>
        <p> Mamdani, who has promised to build 200,000 new affordable housing units over the next 10 years, said he will "triple the City’s production of publicly-subsidized, affordable, union-built, rent-stabilized homes" as well as double the city's investment in the preservation of homes of existing public housing tenants. </p>

<p> Meanwhile, city data for the number of preserved and new housing units built show that in the last decade, more "affordable" units for New Yorkers in moderate and middle income brackets have been or are being built in neighborhoods like Brooklyn's Flatbush, Prospect Heights, Clinton Hill, Ocean Hill, Queen's Corona, Flushing, and Jamaica, and throughout the Bronx. </p>

<p> Housing opportunities for New Yorkers between "extremely low, "very low," and "low" income meanwhile, are mostly concentrated in neighborhoods in the Bronx, East Harlem, the Lower East Side, Brownsville, Far Rockaway, and Coney Island. </p>

<p> Rachel Fee, the executive director of New York Housing Conference, a nonprofit affordable housing policy and advocacy organization, said that tax incentive programs, which reward developers to build affordable housing units for tax benefits, are included in the mix of "affordable" housing units. The tax incentives, Fee said, explain much in the areas where concentration of units are built, as developers see a crossover between zoning opportunity and where the rent levels "make sense."

</p>
<p> "In the last version of 421A, there was an option that allowed 30% of units at 130% area median income, so there were a huge number of apartments built under that program," she said.

</p>
<p> Fee explained the factors at play the mayor-elect will face as he seeks to advance his agenda to build affordable housing, including land costs and population density.

</p>
<p> To built an affordable housing unit, the city must establish a contract with subsidies and pair it with loan tax credits, said Fee. Developers will then receive a private commercial mortgage and potential grant funding.
</p>
<p> "Under the city's term sheets, they really are only feasible in areas with the lowest land cost and that's why you see that concentrated use," Fee said."

</p>
<p> Affordable housing can also only be financially-feasible where there is population density, Fee added.

</p>
<p> "You'll see them often in medium and high density zoning areas where land costs are lower," she said.</p>
      </div>
    </div>
  </PageLayout>

);
