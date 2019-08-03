/**
 * 時間関連の変数を提供するクラス。
 */

export class Time {
  // 秒数。
  private secCount: number = 0;

  // 分。
  private minCount: number = 0;
  // 時間。
  private hourCount: number = 0;

  // setInterval()を保持する変数。
  private counter: any;

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

  public setCounter(counter: any): void {
    this.counter = counter;
  }

  public getCounter(): any {
    return this.counter;
  }
}