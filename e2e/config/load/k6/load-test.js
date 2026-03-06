import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '30s', target: 20 },
    { duration: '10s', target: 0 }
  ]
};

export default function () {

  const res = http.get(
    'https://with-bugs.practicesoftwaretesting.com/api/products/search?q=pliers'
  );

  check(res, {
    'status is 200': (r) => r.status === 200
  });

  sleep(1);

}
