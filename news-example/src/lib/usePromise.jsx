import { useState, useEffect } from "react";

//프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은
// 보통 src 디렉터리에 lib 디렉터리를 만든 후 그 안에 작성함
// Promise의 대기 중, 완료 결과, 실패 결과에 대한 상태를 관리
// usePromise의 의존 배열 dep를 파라미터로 받아옴
export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true); // 로딩 상태로 설정
      try {
        const resolved = await promiseCreator(); // 비동기 작업 수행하는 함수, Promise를 반환함
        setResolved(resolved); // 성공 시 결과 저장
      } catch (e) {
        setError(e); // 실패 시 에러 저장
      }
      setLoading(false); // 로딩 상태 해제
    };
    process();
      // 해당 줄에서만 ESLint 규칙 무시하도록 주석 달기
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}