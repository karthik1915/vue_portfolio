<template>
  <div class="w-full overflow-auto px-3 my-3 font-varelaround">
    <table class="w-full border-collapse text-center">
      <thead>
        <tr class="font-raleway">
          <th class="w-1/3">Qualification</th>
          <th class="w-1/3">Marks / CGPA</th>
          <th class="w-1/3">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SSLC</td>
          <td>430/500</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>HSC<br />Computer Science</td>
          <td>470/600</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>B.E<br />Electronics and communication Engineering</td>
          <td>8.40</td>
          <td>2024</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
}

th,
td {
  padding: 8px;
  transition: background-color 0.3s ease;
}

thead {
  font-weight: bold;
  @apply bg-primary/40;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:hover {
  @apply hover:bg-secondary;
}

tbody tr:not(:last-child) {
  border-bottom: 10px solid transparent;
}
</style>
