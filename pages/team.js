import { Chunk, ChunkCollection, ChunkFieldValue } from "editmode-react";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function AboutUs() {
  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-gray-800 border-t border-gray-700">
      <div className="container px-4 mx-auto">
        <span className="font-bold text-primary">
          <Chunk contentKey="team_section" field="Tagline" />
        </span>
        <h1 className="text-xl lg:text-5xl font-bold mb-12 text-white">
          <Chunk contentKey="team_section" field="Headline" />
        </h1>
        <ChunkCollection
          className="flex flex-wrap -mx-4 items-center"
          identifier="team_members"
          itemClass="w-full md:w-1/2 px-4 mb-10"
        >
          {(getChunk, chunk) => {
            return (
              <div className="flex items-center">
                <ChunkFieldValue
                  identifier="Avatar"
                  className="h-48 md:w-1/3 object-cover rounded w-60 h-48"
                  // style={{ width: "245px", height: "192px" }}
                />
                <div className="pl-10 w-2/3">
                  <h3 className="mb-4 text-3xl font-bold font-heading text-white">
                    <ChunkFieldValue identifier="Name" />
                  </h3>
                  <p className="mb-10 text-white">
                    <ChunkFieldValue identifier="Bio" />
                  </p>
                  {getChunk(chunk, "FacebookURL") && (
                    <a
                      href={getChunk(chunk, "FacebookURL")}
                      className="inline-block mr-2 rounded-full p-1"
                      style={{ backgroundColor: "#1f40ff" }}
                    >
                      <svg
                        className="text-white"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="7"
                          y="3"
                          width="9"
                          height="16"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)"></g>
                      </svg>
                    </a>
                  )}
                  {getChunk(chunk, "TwitterURL") && (
                    <a
                      href={getChunk(chunk, "TwitterURL")}
                      className="inline-block mr-2 rounded-full p-1"
                      style={{ backgroundColor: "#4ea8fe" }}
                    >
                      <svg
                        className="text-white"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="4"
                          width="17"
                          height="14"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)"></g>
                      </svg>
                    </a>
                  )}
                  {getChunk(chunk, "InstagramURL") && (
                    <a
                      href={getChunk(chunk, "InstagramURL")}
                      className="inline-block mr-2 rounded-full p-1"
                      style={{ backgroundColor: "#6926f7" }}
                    >
                      <svg
                        className="text-white"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"
                          fill="currentColor"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="2"
                          width="18"
                          height="18"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)"></g>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          }}
        </ChunkCollection>
      </div>
    </section>
  );
}

AboutUs.getLayout = (page) => <Layout pageName="AboutUs">{page}</Layout>;

export { getStaticProps };
