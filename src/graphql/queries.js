/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        phoneNumber
        companyUrl
        facebookLink
        instagramLink
        twitterLink
        logo
        description
        urlStub
        createdAt
        updatedAt
        owner
        menus {
          items {
            id
            dayOfWeek
            name
            picture
            price
            description
            extraItem {
              extraName
              extraPrice
            }
            createdAt
            updatedAt
            company {
              id
              name
              location
              phoneNumber
              companyUrl
              facebookLink
              instagramLink
              twitterLink
              logo
              description
              urlStub
              createdAt
              updatedAt
              owner
              menus {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      location
      phoneNumber
      companyUrl
      facebookLink
      instagramLink
      twitterLink
      logo
      description
      urlStub
      createdAt
      updatedAt
      owner
      menus {
        items {
          id
          dayOfWeek
          name
          picture
          price
          description
          extraItem {
            extraName
            extraPrice
          }
          createdAt
          updatedAt
          company {
            id
            name
            location
            phoneNumber
            companyUrl
            facebookLink
            instagramLink
            twitterLink
            logo
            description
            urlStub
            createdAt
            updatedAt
            owner
            menus {
              items {
                id
                dayOfWeek
                name
                picture
                price
                description
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      dayOfWeek
      name
      picture
      price
      description
      extraItem {
        extraName
        extraPrice
      }
      createdAt
      updatedAt
      company {
        id
        name
        location
        phoneNumber
        companyUrl
        facebookLink
        instagramLink
        twitterLink
        logo
        description
        urlStub
        createdAt
        updatedAt
        owner
        menus {
          items {
            id
            dayOfWeek
            name
            picture
            price
            description
            extraItem {
              extraName
              extraPrice
            }
            createdAt
            updatedAt
            company {
              id
              name
              location
              phoneNumber
              companyUrl
              facebookLink
              instagramLink
              twitterLink
              logo
              description
              urlStub
              createdAt
              updatedAt
              owner
              menus {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dayOfWeek
        name
        picture
        price
        description
        extraItem {
          extraName
          extraPrice
        }
        createdAt
        updatedAt
        company {
          id
          name
          location
          phoneNumber
          companyUrl
          facebookLink
          instagramLink
          twitterLink
          logo
          description
          urlStub
          createdAt
          updatedAt
          owner
          menus {
            items {
              id
              dayOfWeek
              name
              picture
              price
              description
              extraItem {
                extraName
                extraPrice
              }
              createdAt
              updatedAt
              company {
                id
                name
                location
                phoneNumber
                companyUrl
                facebookLink
                instagramLink
                twitterLink
                logo
                description
                urlStub
                createdAt
                updatedAt
                owner
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
