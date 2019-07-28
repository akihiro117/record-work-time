export class TimeCount {
  private secCount: number = 0;

  private minCount: number = 0;

  private hourCount: number = 0;

  private timer: any;

  public setSecCount(secCount: number): void {
    this.secCount = secCount;
  }

  public getSecCount(): number {
    return this.secCount;
  }

  public setMinCount(minCount: number): void {
    this.minCount = minCount;
  }

  public getMinCount(): number {
    return this.minCount;
  }

  public setHourCount(hourCount: number): void {
    this.hourCount = hourCount;
  }

  public getHourCount(): number {
    return this.hourCount;
  }

  public setTimer(timer: any): void {
    this.timer = timer;
  }

  public getTimer(): any {
    return this.timer;
  }
}