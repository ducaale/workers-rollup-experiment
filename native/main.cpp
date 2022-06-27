
extern "C" {
  extern void print_progress();
  int answer_to_life_the_universe_and_everything() {
    print_progress();
    return 42;
  }
}
