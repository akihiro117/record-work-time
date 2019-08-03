/**
 * タイマーで扱うオブジェクトを提供するクラス。
 */

export class TimeCount {
  // 秒数。
  private secCount: number = 0;

  // 分。
  private minCount: number = 0;
  // 時間。
  private hourCount: number = 0;

  // setInterval()を保持する変数。
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