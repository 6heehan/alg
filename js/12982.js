for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) break;
    answer++;
}
