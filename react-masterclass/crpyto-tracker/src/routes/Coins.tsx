import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  /* --- React query로 대체  ---
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })(); // 즉시 실행
  }, []);
  */

  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
  // fetchCoins 동작이 끝나면 react query 가 isLoading에게 알려주고 데이터를 data에 넣어줌
  // 첫번째 인자는 boolean, 두번째 인자는 데이터
  // 데이터는 캐싱해두기 때문에 다른 페이지에 갔다가 돌아와도 API를 호출하지 않고 데이터가 즉시 렌더링 됨

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ): 
      (<CoinsList>
        {data?.slice(0, 100).map(coin =>
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{"name": coin.name}}>
            <Img 
              src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.symbol} 
            />  
            {coin.name} &rarr;
            </Link>
          </Coin>)}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;