import { gql } from "@apollo/client";

export interface CreateBrandInput {
  name: string;
}

export const GET_BRANDS = gql`
  query GetBrands {
    brands {
      id
      name
    }
  }
`;

export const ADD_BRAND = gql`
  mutation AddBrand($input: CreateBrandInput) {
    createBrand(input: $input) {
      id,
      name
    }
  }
`;
