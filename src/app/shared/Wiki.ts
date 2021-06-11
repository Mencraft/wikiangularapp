export interface Wiki {
  batchcomplete?: string;
  query?: search[];

}

  export interface search {
    ns?: string;
    title?: string;
}